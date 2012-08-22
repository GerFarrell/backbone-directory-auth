window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Login View');
        this.template = templates['Login'];
    },

    events: {
        "click #login-button": "login"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    login:function () {
        var url = '../api/login';
        console.log('Loggin in... ');

        $.ajax({
            url:url,
            dataType:"json",
            success:function (data) {
                console.log(["Login success: ", data]);
            }
        });
    }
});