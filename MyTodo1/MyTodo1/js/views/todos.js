TodoView = Backbone.View.extend({
    events: {
        'click .toggle': 'togglecompleted',
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        if (this.model.get("completed")) {
            this.$el.html('<li style="list-style-type:none"><input type="checkbox" class="toggle" checked/>' + this.model.get("title") + '</li>');
        } else {
            this.$el.html('<li style="list-style-type:none"><input type="checkbox" class="toggle"/>' + this.model.get("title") + '</li>');
        }
        this.$el.toggleClass('completed', this.model.get('completed'));
        return this;
    },

    togglecompleted: function () {
        this.model.toggle();
    },
});