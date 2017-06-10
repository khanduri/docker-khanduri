
/* Contact */

var ContactComponent = React.createClass({
  render: function(){

    var contact = this.props.items;

    return (
      <section id="contact" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Contact</h2>
            <ul className="list-inline banner-social-buttons">
              {contact.twitter ? <li><a href={"https://twitter.com/" + contact.twitter} className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a></li>: null }
              {contact.github ? <li><a href={"https://github.com/" + contact.github} className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a></li>: null }
              {contact.linkedin ? <li><a href={"https://www.linkedin.com/in/"+contact.linkedin} className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">LinkedIn</span></a></li>: null }
              {contact.facebook ? <li><a href={"https://www.facebook.com/"+contact.facebook} className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a></li>: null }
            </ul>
          </div>
        </div>
      </section>
    )
  }
});

if (info.contact){
  React.render(<ContactComponent items={info.contact}/>, document.getElementById('contact'));
}
