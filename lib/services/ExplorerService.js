class ExplorerService{
	
	static filterByMission(explorers, mission){
		const values = Object.values(explorers);
		const filter = values.filter((explorer) => explorer.mission == mission);
		return filter;
	}
	static getAmountOfExplorersByMission(explorers, mission){
		const num = ExplorerService.filterByMission(explorers, mission);
		return {numero: num.length};
	}
	static getExplorersUsernamesByMission(explorers, mission){
		const values = Object.values(explorers);
		const explorersToGetUsernames = values.filter((explorer) => explorer.mission == mission);
		const obj = explorersToGetUsernames.map((explorer) => explorer.githubUsername);
		return obj;
	}
}

module.exports = ExplorerService;

