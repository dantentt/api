define([], function() {

  var users = {}

  users.table = {
    "id":"directus_users",
    "table_name":"directus_users",
    "hidden":true,
    "single":false,
    "inactive_by_default":"0",
    "is_junction_table":false,
    "count":0,
    "url": "http://localhost/directus/api/1/tables/directus_users/"
  };

  users.structure = [
    {
      "id":"activity",
      "column_name":"activity",
      "type":"ALIAS",
      "is_nullable":"NO",
      "ui":"directus_user_activity",
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false
    },
    {
      "id":"name",
      "column_name":"name",
      "type":"ALIAS",
      "is_nullable":"NO",
      "ui":"directus_user",
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false
    },
    {
      "id":"id",
      "column_name":"id",
      "type":"TINYINT",
      "is_nullable":"NO",
      "comment":"",
      "sort":1,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"checkbox",
      "hidden":true
    },
    {
      "id":"active",
      "column_name":"active",
      "type":"TINYINT",
      "is_nullable":"NO",
      "default_value":"1",
      "comment":"",
      "sort":2,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"checkbox",
      "hidden":true
    },
    {
      "id":"first_name",
      "column_name":"first_name",
      "type":"VARCHAR",
      "char_length":"50",
      "is_nullable":"NO",
      "comment":"",
      "sort":3,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"last_name",
      "column_name":"last_name",
      "type":"VARCHAR",
      "char_length":"50",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":4,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"password",
      "column_name":"password",
      "type":"VARCHAR",
      "char_length":"255",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":5,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"token",
      "column_name":"token",
      "type":"VARCHAR",
      "char_length":"255",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":6,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"reset_token",
      "column_name":"reset_token",
      "type":"VARCHAR",
      "char_length":"255",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":7,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"reset_expiration",
      "column_name":"reset_expiration",
      "type":"DATETIME",
      "is_nullable":"NO",
      "comment":"",
      "sort":8,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"datetime"
    },
    {
      "id":"email",
      "column_name":"email",
      "type":"VARCHAR",
      "char_length":"255",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":9,
      "ui":"email",
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false
    },
    {
      "id":"description",
      "column_name":"description",
      "type":"TEXT",
      "char_length":"65535",
      "is_nullable":"NO",
      "comment":"",
      "sort":10,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false,
      "ui":"textarea"
    },
    {
      "id":"email_messages",
      "column_name":"email_messages",
      "type":"TINYINT",
      "is_nullable":"NO",
      "default_value":"1",
      "comment":"",
      "sort":11,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false,
      "ui":"checkbox"
    },
    {
      "id":"last_login",
      "column_name":"last_login",
      "type":"DATETIME",
      "is_nullable":"NO",
      "default_value":"0000-00-00 00:00:00",
      "comment":"",
      "sort":12,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"datetime"
    },
    {
      "id":"last_page",
      "column_name":"last_page",
      "type":"VARCHAR",
      "char_length":"255",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":13,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"ip",
      "column_name":"ip",
      "type":"VARCHAR",
      "char_length":"50",
      "is_nullable":"NO",
      "default_value":"",
      "comment":"",
      "sort":14,
      "system":true,
      "master":false,
      "hidden_list":false,
      "hidden_input":true,
      "required":false,
      "ui":"textinput"
    },
    {
      "id":"group",
      "column_name":"group",
      "type":"INT",
      "is_nullable":"YES",
      "comment":"",
      "sort":15,
      "system":false,
      "master":false,
      "hidden_list":false,
      "hidden_input":false,
      "required":false,
      "ui":"numeric"
    }
  ];

  users.preferences = {
    "id":"1",
    "user":"1",
    "table_name":"directus_users",
    "columns_visible":"name,activity,email,description",
    "sort":"id",
    "sort_order":"asc",
    "active":"1"
  }

  return users;
});