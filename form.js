// form.js
// splashinn (c) 2014

var Form = function(options) {

    options = options || {};

    this.url = options.url;
    this.$fields = $(options.fields);
    this.$status = $(options.status);
    this.$submit = $(options.submit);
    this.$form = options.form || 'form';
    this.rFields = {
        required: /[^.*]/,
        nodigit: /^[^0-9]+$/,
        email: /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    };
    this.required = [
        this.rFields.nodigit,
        this.rFields.email,
        this.rFields.required,
        this.rFields.required
    ];
    this.errors = ['Please enter a valid name.', 'Please enter a valid email address.', 'You must enter a subject.', 'No message? But I wanted one :('];

}

Form.prototype.init = function init() {

    this.$submit.click($.proxy(function(e) {
        this.process(e);
    }, this));

};

Form.prototype.process = function process(e) {

    var filled = true;

    e.stopImmediatePropagation();
    e.preventDefault();

    this.$fields.each($.proxy(function(i, element) {

        var $element = $(element);

        if (!$element.val().match(this.required[i])) {

            $element.focus();
            this.update(this.errors[i], true);
            filled = false;
            return false;

        }
    }, this));

    filled && this.submit($(this.$form).serialize());

};

Form.prototype.update = function update(message, isError) {

    if (isError && this.$status.hasClass('error')) {

        this.$status.addClass('error')
            .text(message);

        setTimeout($.proxy(function() {
            this.$status.removeClass('shake');
        }, this), 500);

    }
    else {

        this.$status.fadeOut();

        setTimeout($.proxy(function() {
            this.$status.text(message)
                .fadeIn();

            if (isError) {
                this.$status.removeClass('shake')
                    .addClass('error');
            }
            else {
                this.$status.removeClass('error info')
                    .addClass('success');
            }
        }, this), 500);

    }

    return this;

};

Form.prototype.submit = function submit(data) {

    $.ajax({
        type: 'POST',
        url: this.url,
        data: data,
        success: $.proxy(function(msg) {
            this.$fields.fadeOut();
            this.$status
                .empty()
                .append('<h4 class="">Nice one! The form has been sent to the server...</h4>')

            $(this.$submit)
                .animate({
                left: '-=500px',
                opacity: 0,
            }, 300);

        }, this)
    });
};
