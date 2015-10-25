FlowRouter.route('/', {
  action: function() {
    FlowRouter.go('basic');
  }
});

FlowRouter.route('/basic/:step?', {
  name: 'basic',
  action: function(params, queryParams) {
    if (!params.step) {
      FlowRouter.go('basic', {step: 'contact-information'})
    } else {
      BlazeLayout.render('layout', {area: 'basic'})
    }
  },
});

FlowRouter.route('/dynamic', {
  name: 'dynamic',
  action: function() {
    BlazeLayout.render('layout', {area: 'dynamicFields'});
  }
});

FlowRouter.route('/orders/:_id', {
  action: function(params) {
    BlazeLayout.render('layout', {area: 'viewOrder'})
  }
});