const ExplorerService = require('../lib/services/ExplorerService');
const FizzbuzzService = require('../lib/services/FizzbuzzService');
const reader = require('../lib/utils/Reader');


describe("Tests for Reader", () => {
  test('1) Open the file using Reader', () => {
    const read = reader.readJsonFile("../app/assets/files/explorers.json");
    expect(read.result).not.toBeUndefined();
  });
});

describe("Tests for Explorer Service", () => {
  test('2) Get explorers in node mission', () => {
    const explorers = reader.readJsonFile("../app/assets/files/explorers.json");
    const exp = ExplorerService.filterByMission(explorers, "node");
    expect(exp).not.toBeUndefined();
  });
  test('3) Get explorers length in node mission', () => {
    const explorers = reader.readJsonFile("../app/assets/files/explorers.json");
    const exp = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    expect(exp.numero).not.toBeUndefined();
  });
  test('4) Get explorers usernames by mission', () => {
    const explorers = reader.readJsonFile("../app/assets/files/explorers.json");
    const exp = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
    expect(exp).not.toBeUndefined();
  });
});

describe("Tests for Fizzbuzz", () => {
  test('5) EXPLORER 1', () => {
    const explorer1 = {name: "Explorer1", score: 1}
    const exp = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(exp.trick).toBe(1);
  });
  test('6) EXPLORER 3', () => {
    const explorer1 = {name: "Explorer3", score: 3}
    const exp = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(exp.trick).toBe("FIZZ");
  });
  test('7) EXPLORER 5', () => {
    const explorer1 = {name: "Explorer5", score: 5}
    const exp = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(exp.trick).toBe("BUZZ");
  });
  test('7) EXPLORER 15', () => {
    const explorer1 = {name: "Explorer15", score: 15}
    const exp = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(exp.trick).toBe("FIZZBUZZ");
  });
});