import { OtaService, stations } from './ota.service';

describe('OTA Service', () => {
  let otaService: OtaService;

  beforeEach(() => {
    otaService = new OtaService();
  });

  describe('findNearest()', () => {
    it('should return a list of nearby stations', () => {
      const lat = 43.642613,
            lon = 79.381280;

      const result = otaService.findNearest(lat, lon);
      expect(result).toEqual(stations);
    });
  });

  describe('findStationsByShowTitle()', () => {
    it('should return 0 or more stations that have the show, given by title', () => {
      const title = 'Rick & Morty';
      const result = otaService.findStationsByShowTitle(title);
      console.log(result);
      expect(result.length).toBeGreaterThanOrEqual(0);
      expect(result.length).toBeLessThanOrEqual(2);
    });
  });
});
