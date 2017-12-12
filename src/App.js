import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

@graphql(gql `
  query allTableRows {
    allTableRows {
      id
      name
      surname
      age
      birthCountry
      createdAt
    }
  }
`)
class App extends Component {
  constructor () {
    super ()
    this.state = {
      country: 'Germany'
    }
  }

  setCountry= (country) => {
    this.setState({
      country
    })
  }

  render() {
    const data = this.props.data.allTableRows
    
    const columns = [
      {
        Header: 'Id',
        accessor: 'id', // String-based value accessors!
        
      },
      {
        Header: 'name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'surname',
        accessor: 'surname' // String-based value accessors!
      },
      {
        Header: ' age',
        accessor: 'age' // String-based value accessors!
      },
      {
        Header: 'birthCountry',
        accessor: 'birthCountry', // String-based value accessors!
        Cell: props => <span className='number' onClick={() => this.setCountry(props.value)}>{props.value}</span>
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt' // String-based value accessors!
      },
    ]

    const columnsCountryFilter = [
      {
        Header: 'Id',
        accessor: 'id', // String-based value accessors!
        
      },
      {
        Header: 'name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'surname',
        accessor: 'surname' // String-based value accessors!
      },
      {
        Header: ' age',
        accessor: 'age' // String-based value accessors!
      },
      {
        Header: 'birthCountry',
        accessor: 'birthCountry', // String-based value accessors!
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt' // String-based value accessors!
      },
    ]
    const dataCountryFilter = this.props.data.allTableRows &&  
      this.props.data.allTableRows.filter(el => el.birthCountry === this.state.country)
    return (
      <div>
        <ReactTable data={data} columns={columns}/>
        <ReactTable data={dataCountryFilter} columns={columnsCountryFilter}/>
      </div>
    )
  }
}

export default App