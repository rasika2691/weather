var React = require('react');

var WeatherForm = React.createClass({
onFormSubmit: function(e){
  e.preventDefault();  {/*avoid reloading whole page each time */}

  var location = this.refs.location.value; {/* grab user entered location value in a variable */}

  if(location.length > 0){
    this.refs.location.value =''; {/* clear the textbox after receiving location value */}
    this.props.onSearch(location); {/* pass the location to function for search processing */}
  }
},

  render: function(){
    return(
    <div>

      <form onSubmit={this.onFormSubmit}> {/* call a function (onFormSubmit) on form submit which is declared here so this. */}
      <input type="text" className="form-control" placeholder="Enter city Name" ref="location"></input><br/>
    <p><button className="btn btn-default btn-md btn-block"> Get Weather</button></p>
      </form>
    </div>
    );
  }
});
module.exports= WeatherForm;
