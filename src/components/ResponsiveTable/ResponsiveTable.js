import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
// CSS overrides
import './ResponsiveTable.css';


export class ResponsiveTable extends Component {
	rowIncludes(filter, row) {
		// all from the drop down returns everything
		if (filter.value === 'all') {
			return true;
		}
		// search for string anywhere in field
		const id = filter.pivotId || filter.id
		return row[id] !== undefined ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
	}

	render() {
		return (
			<ReactTable				
				className="-highlight"
				columns={[
					{
						Header: 'Agency',
						accessor: 'Promise made',
						filterMethod: this.rowIncludes,
						Filter: (filter => {
							return (
								<select
									onChange={event => filter.onChange(event.target.value)}
									style={{ 
										alignItems: 'start',
										display: 'flex',
										width: "50%" 
									}}
									value={filter ? filter.value : "all"}
								>
									<option value="all">All</option>
									<option value="Provincial government">Provincial government</option>
									<option value="City of Vancouver">City of Vancouver</option>
								</select>
                    		)
						}),
						width: 200
					},
					{
						Header: 'Desciption',
						accessor: 'Government agency',
						// filterMethod: this.rowIncludes,
						width: 200
					},
					{
						Header: 'Status',
						accessor: 'Promise status',
						filterMethod: this.rowIncludes,
						Filter: (filter => {
							return (
								<select
									onChange={event => filter.onChange(event.target.value)}
									style={{ width: "100%" }}
									value={filter ? filter.value : "all"}
								>
									<option value="all">All</option>
									<option value="Complete">Complete</option>
									<option value="In progress">In progress</option>
									<option value="Not started">Not started</option>
								</select>
                    		)
						})
					}
					

				]}
				data={this.props.data}
				defaultPageSize={5}
				filterable={true}
				filterAll={true}
				showPageSizeOptions={false}
				showPaginationTop={false}
				showPaginationBottom={true}
				SubComponent={row => {
					console.log(row.original)
					return (
						<div className='sub-row'>
							<p>{row.original['Promise description']}</p>
						</div>
					);
				}}
			/>

		);
	}
}

export default ResponsiveTable;
