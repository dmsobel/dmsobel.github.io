class PageComponent extends React.Component {
  render(){
    return (
      <div>{this.props.children}</div>
    );
  }
}

class EmployeesTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {employees: []};
    this.loadData = this.loadData.bind(this);
  }
    

  render(){
    const employees = this.state.employees.map((employee, empindex) => {
      return <EmployeesTableRow key={empindex} product={employee} />
    });
    return (
      <div>
        <div>
        <LoadBtn clickHandler={this.loadData} />
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {employees}
            </tbody>
        </table>
      </div>
        
    );    
   
  }

  componentDidMount(){
    this.loadData();
      console.log("componentDidMount");
  }

  loadData(){
    fetch('http://libertyville.rice.iit.edu/scripts/4565_lab3.php')
    .then((res) => res.json())
    .then((data) => {
      this.setState({employees: data});
    });
  }
}

class EmployeesTableRow extends React.Component {
    
  render(){
    var employee = this.props.product;
    var active = employee.active;
      
    return (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.title}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td className={(String(active) == 'true') ? 'greenStatus':'redStatus'}>{String(active)}</td>
            </tr>
    );
  }
         
}

class LoadBtn extends React.Component {
  render(){
    return(
      <button className="btn" onClick={this.props.clickHandler}>Reload Data</button>
    );
  
  }
}

ReactDOM.render(<PageComponent><EmployeesTable/></PageComponent>, document.getElementById('root')
);
