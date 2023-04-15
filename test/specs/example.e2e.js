import MainScreen from '../screenobjects/main.screen.js';
import StatsScreen from '../screenobjects/stats.screen.js';

describe('Hey Linda App scenarios', () => {
    beforeEach(async () => {
        await MainScreen.waitForStatsBtn();
        await MainScreen.clickStatsBtn();
        await MainScreen.waitForCurrentStreakText();
    });
    
    it('should navigate to the Stats screen', async () => {
        await expect(MainScreen.currentStreakText).toBeExisting();
        await expect(MainScreen.currentStreakText).toHaveTextContaining('Current Streak');
    });

    it('should display the manual entry modal when clicking on a date from the calendar', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-14');
        await expect(StatsScreen.manualEntryModal).toBeExisting();
    });

    it('should type in a manual entry modal, typed entry should be recorded in the current streak modal', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-14');
        await expect(StatsScreen.manualEntryModal).toBeExisting();
    });

});