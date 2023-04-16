import MainScreen from '../screenobjects/main.screen.js';
import swipeAction from '../utils.js';

describe('Hey Linda App - Main Screen scenarios', () => {
    before(async () => {
        await MainScreen.waitForStatsBtn();
    });

    it('should display the Sleep category at the end of the main screen', async () => {
        const SCROLL_TIMES = 5; // number of times to scroll down
        for (let i = 0; i < SCROLL_TIMES; i++) {
            await swipeAction(100, 100, 'Up');
    };
    expect (MainScreen.screenTitleDisplayed).toHaveTextContaining('SLEEP');
    });

});