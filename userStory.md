# Dashboard user story
In this document we define all the technical steps we need to follow to accomplish the proposed functionality according the given design.


# 1. Create the Chart component. (XS)
This component has to return a chart, to make it easier we can use a library to build the chart. [For example: React minimal pie chart](https://www.npmjs.com/package/react-minimal-pie-chart)

# 2. Show the component (XS)
To make sure the component works, we have to render the component in the correct route "/my-dashboard".

At the moment we just want to render the component with dummy data.

# 3. Get User Issues (S)
In this task we will need to get the Issues related to the user. Make sure the user has logged-in.

Inside the Chart component, send a request to the endpoint sending the user token, once the user is verified you can now execute a query to the DB filtering by the user reference to get only the issues related.

After the query is done, send a response with the issues received to the front-client.

# 4. Sort the Issues (S)
At this moment we are ready to group the data by status (4 groups) and get the total Story points for each group. Then, use props to send the values and render the chart according those values.