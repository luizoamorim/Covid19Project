# Architecture

The application was developed using reactJS with typescript.

## Source folder - src

### routes.tsx
- Uses BrowserRouter component of react-router-dom for that we can to navigate between pages in our Single Page Application.

### App.tsx
- It's our main component that's gonna be mounted on DOM.

### index.tsx
- Goes insert our main component in div root of html DOM.

### pages folder
- All pages that the app it's gonna need.
- This pages that will be routed by BrowserRouter component.

### components folder
- All components that we may to reuse now or at the future.

### assets folder
- All images and icons.

## Public folder
- Our html.

## QA code
- I used eslint, prettier and editorconfig for code patterns.
- In eslint I chooosed airbnb definition.

# Dataviz
- Datas are pulled of postman Covid19API.
  https://documenter.getpostman.com/view/10808728/SzS8rjbc

## Views

### Confirmed, recovered and deaths cases per country
- First was created a simple view to show all confirmed, recovered and deaths cases per country.
- Shows also 2 charts that be explained below on Charts topic.

### Covid19 on the world
- 2 views:
  - All cases today divided in 3 subtypes: confirmed, recovered and deaths.
  - And all cases with the same types since the beginning of the pandemic.

### Ranking - Country with more cases since the beginning
- Shows all countries ordered by total confirmed cases.

### Ranking - Country with more cases today
- Shows all countries ordered by total confirmed new cases.

### Ranking - Country with more death cases since the beginning
- Shows all countries ordered by total new deaths cases.

## Recharts
Url: https://recharts.org

- Using recharts to show datas with charts
- So usefull library

### Charts
1. PieChart
  - Shows the proportional data based on the confirmed cases for selected country.

2. LineChart
  - Shows three lines. One to confirmed cases, other to recovered and another to death cases.
  - At this chart the data are divided per month for selected country.
  - Will showed when size screen be biggest than 1100px.

3. StackedBarChart
  - Shows one bar stacked in 3 types: confirmed, recovered or death cases.
  - At this chart the data are divided per month for selected country.
  - Will showed when size screen be snallest than 1100px.

# Link to access the app
- https://covid19mundo.netlify.app/
