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

`npm install my-table-component`

###
`yarn add my-table-component`

## Usage
`import Table from 'my-table-component';`

`const data = [
  {
    "id": 1,
    "name": "Mavis Chen",
    "mobile": "9988 7654",
    "expiry": "Dec 2022",
    "penalty": "$600"
  },
  {
    "id": 2,
    "name": "Rodney Artichoke",
    "mobile": "9988 7676",
    "expiry": "Nov 2022",
    "penalty": "$300"
  },
  {
    "id": 3,
    "name": "Valentino Morose",
    "mobile": "8900 7654",
    "expiry": "Dec 2022",
    "penalty": "$600"
  },
  {
    "id": 4,
    "name": "Alex Chen",
    "mobile": "9988 7654",
    "expiry": "Dec 2022",
    "penalty": "$600"
  },
  {
    "id": 5,
    "name": "Eric Widget",
    "mobile": "9809 7654",
    "expiry": "Dec 2022",
    "penalty": "$600"
  }
];`

`const columns = [
    { title: "Name", field: "name", sortable: true },
    { title: "Mobile", field: "mobile", sortable: true },
    { title: "Expiry", field: "expiry", sortable: true },
    { title: "Penalty", field: "penalty", sortable: true },
  ];`

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

This project is licensed under the MIT License - see the LICENSE.md file for details.