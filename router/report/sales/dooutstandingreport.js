module.exports = function(req, res, next){
   res.render('doOutstandingReport', {
      page:{
         title: 'Reporting DO outstanding',
         controllerName: 'doOutstandingController',
         route: req.route.path,
         params: req.params,
         data: {
           controller: '/dist/js/controller/report/sales/doOutstandingController.js',
           directive: ['/dist/js/directive/menu.js', '/dist/js/directive/scroll.js', '/dist/js/directive/pagination.js', '/dist/js/directive/table.js', '/dist/js/directive/input.js', '/dist/js/directive/warehouseList.js', '/dist/js/directive/tableContent.js'],
           service: ['/dist/js/services/modal.js', '/dist/js/services/landing.js', '/dist/js/services/cookies.js', '/dist/js/services/user.js', '/dist/js/services/report.js', '/dist/js/services/warehouse.js']
         }
      }
   })
}
