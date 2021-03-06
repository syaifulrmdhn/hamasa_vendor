module.exports = function(req, res, next){
	res.render('customerMaster', {
		page : {
			title: 'Master Customer',
			controllerName: 'customerMasterController',
			route: req.route.path,
			params: req.params,
			data: {
				controller: '/dist/js/controller/sales/customerMasterController.js',
				directive: ['/dist/js/directive/menu.js', '/dist/js/directive/scroll.js', '/dist/js/directive/pagination.js', '/dist/js/directive/table.js', '/dist/js/directive/input.js', '/dist/js/directive/tableContent.js'],
				service: ['/dist/js/services/modal.js', '/dist/js/services/landing.js', '/dist/js/services/cookies.js', '/dist/js/services/user.js', '/dist/js/services/customer.js']
			}
		}
	})
}
