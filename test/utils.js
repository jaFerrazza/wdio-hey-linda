class utility {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get statsBtn () {
        return $('//android.widget.TextView[contains(@text, "Stats")]');
    }

    set textViewSelector(text){
        this._textViewSelector = `//android.widget.TextView[contains(@text, "${text}")]`;
    }

 
}

export default new utility();