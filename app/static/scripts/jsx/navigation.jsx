

/* Navigation */
var NavigationComponent = React.createClass({
  render: function(){

    var navigation = this.props.items;

    var rows = [];
    navigation.map(function(section){
      if (section != 'profile'){
        rows.push(<li><a className="page-scroll" href={"#"+section}>{section}</a></li>);
      }
    });

    return (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                    <i className="fa fa-play-circle"></i>  <span className="light">HOME</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden"><a href="#page-top"></a></li>
                    { rows }
                </ul>
            </div>
        </div>
    </nav>
    )
  }
});
if (info.navigation){
  React.render(<NavigationComponent items={info.navigation} />, document.getElementById('navigation'));
}
