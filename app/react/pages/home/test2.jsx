/** @jsx React.DOM */
var React = require('react');
var SubNav = require('./components/nav');
var IScroll = require('../../components/iscroll');
var __ = require('../../i18n')._;
var Ipsum = require('../../components/ipsum');

module.exports = React.createClass({
 componentDidMount: function(){
  this.props.setPageTitle(__('Test 2'))
 },
 render: function(){
    return (
      <div>
      <SubNav />
      <IScroll>
        <h2>{this.props.routeParams.id}</h2>
        <Ipsum paragraphs={5} />
      </IScroll>
      </div>
    );
  }

});