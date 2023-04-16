/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainScreen {
    /**
     * define selectors using getter methods
     */

    get statsBtn () {
        return $('//android.widget.TextView[contains(@text, "Stats")]');
    }

    get currentStreakText () {
        return $('//android.widget.TextView[contains(@text, "Current Streak")]');
    }

    get screenTitleDisplayed () {
        return $('//android.widget.TextView[contains(@resource-id, "themed-text")]');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async waitForStatsBtn () {
        await this.statsBtn.waitForDisplayed({
            timeout: 15000
        });
    }

    async waitForCurrentStreakText () {
        await this.currentStreakText.waitForDisplayed({
            timeout: 15000
        });
    }

    async clickStatsBtn () {
        await this.statsBtn.click();
    }

}

export default new MainScreen();
