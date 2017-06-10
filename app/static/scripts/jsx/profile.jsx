

var HeaderComponent = React.createClass({
  render: function(){
    var profile = this.props.items;
    return (
      <div className="intro-body">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <h1 className="brand-heading">{ profile.name.first } { profile.name.last }</h1>
                    <p className="intro-text"> { profile.desc.first }<br/>{ profile.desc.second }</p>
                    <a href="#about" className="btn btn-circle page-scroll">
                          <i className="fa fa-angle-double-down animated"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
});

var FooterComponent = React.createClass({
  render: function(){
    var profile = this.props.items;
    return (
      <div className="container text-center">
        <p>Copyright &copy; { profile.name.first } { profile.name.last } - { new Date().getFullYear() }</p>
      </div>
    )
  }
});
if (info.profile){
  React.render(<HeaderComponent items={info.profile} />, document.getElementById('header'));
  React.render(<FooterComponent items={info.profile} />, document.getElementById('footer'));
}
