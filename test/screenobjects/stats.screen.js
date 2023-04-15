

class StatsScreen {

    get manualEntryModal () {
        return $('//android.view.View[contains(@text, "Manual Entry")]');
    }
    
    async clickDateFromCalendar (date) {
        /**
         * Click on the date from the calendar on the Stats screen
         * Date format: "YYYY-MM-DD"
         * @date {String}
         */
        await $(`//android.widget.Button[contains(@resource-id, "${date}")]`).click();
    }
}

export default new StatsScreen();
