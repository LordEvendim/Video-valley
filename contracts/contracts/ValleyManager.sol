// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ValleyManager {
    address public owner;
    uint256 public submissionFee = 1 * (10**18);
    // uint256 public seasonLength = 1 * 60 * 60 * 24 * 7;
    uint256 public seasonLength = 1 * 60 * 10;
    uint256 public currentSeason = 0;

    mapping(address => uint256) public balances;
    mapping(uint256 => mapping(address => uint256))
        public totalUserLockedBalanceInSeason;

    mapping(uint256 => mapping(string => VideoSubmission))
        public idsToSubmissions;
    mapping(uint256 => string[]) public submittedVideosIds;
    mapping(uint256 => mapping(string => bool)) public isAlreadySubmitted;
    mapping(uint256 => address) public seasonWinners;

    SeasonDetails[] public seasons;

    struct VideoSubmission {
        address submitter;
        string title;
        string description;
        string id;
        string url;
        uint256 votes;
    }

    struct SeasonDetails {
        uint256 totalValue;
        uint256 endingDate;
        uint256 collectedFees;
    }

    constructor() {
        owner = msg.sender;

        seasons.push(
            SeasonDetails({
                totalValue: 0,
                endingDate: block.timestamp + seasonLength,
                collectedFees: 0
            })
        );
    }

    function getAllVideos(uint256 season)
        public
        view
        returns (VideoSubmission[] memory)
    {
        uint256 length = submittedVideosIds[season].length;
        VideoSubmission[] memory collectedSubmissions = new VideoSubmission[](
            length
        );

        for (uint256 i = 0; i < length; i++) {
            collectedSubmissions[i] = idsToSubmissions[season][
                submittedVideosIds[season][i]
            ];
        }

        return collectedSubmissions;
    }

    function addVideo(
        string calldata _title,
        string calldata _description,
        string calldata _id,
        string calldata _url
    ) external payable {
        require(msg.value >= submissionFee, "Fee is too small");
        require(
            isAlreadySubmitted[currentSeason][_id] == false,
            "video already submitted"
        );

        idsToSubmissions[currentSeason][_id] = VideoSubmission({
            submitter: msg.sender,
            title: _title,
            description: _description,
            id: _id,
            url: _url,
            votes: 0
        });
        submittedVideosIds[currentSeason].push(_id);
        isAlreadySubmitted[currentSeason][_id] = true;
        seasons[currentSeason].collectedFees += msg.value;
    }

    function vote(string calldata _id) external payable {
        require(msg.value > 0, "cannot vote with zero");

        totalUserLockedBalanceInSeason[currentSeason][msg.sender] += msg.value;
        idsToSubmissions[currentSeason][_id].votes += msg.value;
        seasons[currentSeason].totalValue += msg.value;
    }

    function withdraw(uint256 season) external {
        require(
            totalUserLockedBalanceInSeason[season][msg.sender] > 0 ||
                balances[msg.sender] > 0,
            "user have no funds"
        );
        require(seasons[currentSeason].endingDate < block.timestamp);
        uint256 amount = 0;

        if (totalUserLockedBalanceInSeason[season][msg.sender] > 0) {
            uint256 totalVotes = seasons[currentSeason].totalValue;
            uint256 userVotes = totalUserLockedBalanceInSeason[currentSeason][
                msg.sender
            ];

            uint256 bonus = ((seasons[currentSeason].collectedFees / 2) *
                userVotes) / totalVotes;
            totalUserLockedBalanceInSeason[currentSeason][msg.sender] = 0;
            amount +=
                bonus +
                totalUserLockedBalanceInSeason[season][msg.sender];
        }

        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount + balances[msg.sender]);
    }

    function pushSeason() external {
        require(
            seasons[currentSeason].endingDate < block.timestamp,
            "season is not ended"
        );

        uint256 i = 0;
        uint256 currentMax = 0;
        uint256 winnerIndex = 0;

        uint256 length = submittedVideosIds[currentSeason].length;

        for (i = 0; i < length; i++) {
            uint256 votesForId = idsToSubmissions[currentSeason][
                submittedVideosIds[currentSeason][i]
            ].votes;

            if (votesForId > currentMax) {
                currentMax = votesForId;
                winnerIndex = i;
            }
        }

        address winnerAddress = idsToSubmissions[currentSeason][
            submittedVideosIds[currentSeason][winnerIndex]
        ].submitter;
        balances[winnerAddress] += seasons[currentSeason].collectedFees / 2;

        currentSeason++;
        seasons.push(
            SeasonDetails({
                totalValue: 0,
                endingDate: block.timestamp + seasonLength,
                collectedFees: 0
            })
        );
    }
}
