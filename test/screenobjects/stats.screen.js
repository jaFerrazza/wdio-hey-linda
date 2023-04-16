

class StatsScreen {

    get manualEntryModal () {
        return $('//android.view.View[contains(@text, "Manual Entry")]');
    }

    get totalSessions () {
        return $('//android.widget.TextView[contains(@text, "Total Sessions")]');
    }

    async timeMedidated (minutes, hour = "", is_formatted = false) {
        /**
         * Returns the time medidated selector constructed
         * @minutes {String}
         * @hour {String}
         * @is_formatted {Boolean}
         * */
        if (is_formatted) {
            return $(`//android.widget.TextView[contains(@text, "${hour}h ${minutes}m")]`);
        }
        return $(`//android.widget.TextView[contains(@text, "${minutes} minutes")]`);
    }

    async totalSessionsDisplayed (sessions = Number) {
        /**
         * Returns the total sessions displayed selector constructed
         * @sessions {Number}
         * */
        return $(`//android.widget.TextView[contains(@text, "${sessions} sessions")]`);
    }

    async totalStreakDisplayed (streak = Number) {
        /**
         * Returns the total streak displayed selector constructed
         * @streak {Number}
         * */
        return $(`//android.widget.TextView[contains(@text, "${streak} days")]`);
    }


    
    async clickDateFromCalendar (date) {
        /**
         * Click on the date from the calendar on the Stats screen
         * Date format: "YYYY-MM-DD"
         * @date {String}
         */
        await $(`//android.widget.Button[contains(@resource-id, "${date}")]`).click();
    }

    async setMedidationTime (time) {
        /**
         * Set the meditation time in the manual entry modal
         * Time in minutes
         * @time {String}
         */
        await $('//android.widget.EditText').clearValue();
        await $('//android.widget.EditText').setValue(time);
    }

    async clickSubmitBtn () {
        /**
         * Click on the submit button in the manual entry modal
         */
        await $('//android.widget.Button[contains(@resource-id, "submit-btn")]').click();
    }
}

export default new StatsScreen();
