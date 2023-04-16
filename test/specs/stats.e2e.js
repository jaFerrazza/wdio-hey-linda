import MainScreen from '../screenobjects/main.screen.js';
import StatsScreen from '../screenobjects/stats.screen.js';
import * as swipe from '../utils.js';

describe('Hey Linda App - Stats scenarios', () => {
    before(async () => {
        await MainScreen.waitForStatsBtn();
        // await MainScreen.clickStatsBtn();
        // await MainScreen.waitForCurrentStreakText();
    });

    it.only('should test the horizontal scroll on the Stats screen', async () => {
        await swipe.default.verticalSwipe();
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
        await StatsScreen.setMedidationTime('10');
        await StatsScreen.clickSubmitBtn();
        await expect(StatsScreen.timeMedidated('10')).toHaveTextContaining('10 minutes');
    });

    it('should display the total sum of time on the Time Meditating modal when adding a manual entry for another day', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-13');
        await StatsScreen.setMedidationTime('30');
        await StatsScreen.clickSubmitBtn();
        await expect(StatsScreen.timeMedidated('40')).toHaveTextContaining('40 minutes');
    });

    it('should display a formatted time when Time Medidated goes over 60 minutes', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-13');
        await StatsScreen.setMedidationTime('70');
        await StatsScreen.clickSubmitBtn();
        await expect(StatsScreen.timeMedidated('20', '1', true)).toHaveTextContaining('1h 20m');
    });

    it('should increase the sessions counter when manual entries are added for different days', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-15');
        await StatsScreen.setMedidationTime('10');
        await StatsScreen.clickSubmitBtn();
        await expect(StatsScreen.totalSessionsDisplayed(3)).toHaveTextContaining('3 sessions');
    });

    it('should display the correct current streak when adding manual entries for different days', async () => {
        await StatsScreen.clickDateFromCalendar('2023-04-12');
        await StatsScreen.setMedidationTime('10');
        await StatsScreen.clickSubmitBtn();
        await expect(StatsScreen.totalStreakDisplayed(4)).toHaveTextContaining('4 days');
    });

});