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
  render() {
    const data = this.props.data.allTableRows
    
    const columns = [
      {
        Header: 'Id',
        accessor: 'id' // String-based value accessors!
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
        accessor: 'birthCountry' // String-based value accessors!
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt' // String-based value accessors!
      },
    ]

    return (
      <div>
        <ReactTable data={data} columns={columns}/>
      </div>
    )
  }
}

export default App