window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Login View');
        this.template = templates['Login'];
    },

    events: {
        "click #loginButton": "login"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    login:function () {
        var url = '../api/login';
        console.log('Loggin in... ');
        var formValues = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {
                console.log(["Login success: ", data]);
            }
        });
    }
});