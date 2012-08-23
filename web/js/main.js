 
 // Override backbone sync to handle 401 errors (error when not logged in)
Backbone._sync = Backbone.sync; // Save original backbone sync object
Backbone.sync = function(method, model, options) {
    var params = _.clone(options);
    params.error = function(request, type, message) {
      if(request.status == 401) {
        window.location.replace('/#login');
      }
    };

    Backbone._sync(method, model, params);
};

window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "contact": "contact",
        "employees/:id": "employeeDetails",
        "login" : "login"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.render().el);

        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.homeView.el);
        this.headerView.select('home-menu');
    },

    contact: function () {
        if (!this.contactView) {
            this.contactView = new ContactView();
            this.contactView.render();
        }
        $('#content').html(this.contactView.el);
        this.headerView.select('contact-menu');
    },

    employeeDetails: function (id) {
        var employee = new Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                $('#content').html(new EmployeeView({model: data}).render().el);
            }
        });
    },
    login: function() {
        $('#content').html(new LoginView().render().el);
    }

});

templateLoader.load(["HomeView", "ContactView", "HeaderView", "EmployeeView", "EmployeeSummaryView", "EmployeeListItemView", "Login"],
    function () {
        app = new Router();
        Backbone.history.start();
    });