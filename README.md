# Getting Started with Table Component

The Table Component is a UI component that displays data in a tabular format. It is designed to be highly customizable and flexible to meet the needs of different projects and users.


## Features

- Supports multiple columns
- Supports sorting of columns
- Ability to set column width
- Responsive design for mobile devices
- Easy to use API with customizable options

## Installation

To install the Table Component, use the following command:

### npm
`npm install my-table-component`

###
`yarn add my-table-component`

## Usage
`import Table from 'my-table-component';`

`const data = [  { name: 'John', age: 30, city: 'New York' },  { name: 'Jane', age: 25, city: 'London' },  { name: 'Jim', age: 35, city: 'Paris' },];`

`const columns = [  { title: 'Name', dataIndex: 'name' },  { title: 'Age', dataIndex: 'age' },  { title: 'City', dataIndex: 'city' },];`

`<Table data={data} columns={columns} />`

## Limitations

Currently, the Table Component has the following limitations:

- Does not support pagination

## Conclusion

The Table Component is a highly customizable and flexible solution for displaying data in a tabular format. Whether you need to display a small amount of data or a large amount, the Table Component has you covered. Try it out today and see how it can improve your project!

## Authors
Alex Aung Myo Oo - Initial work - [Author's Github](https://www.example.com)
See also the list of contributors who participated in this project.

## License

This project is licensed under the [Name of License] License - see the LICENSE.md file for details.