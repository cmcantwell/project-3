Covid-19 Public Information Website

This project is meant to provide general information on the Covid-19 virus, including a brief history of the virus, vaccination suggestions, a visual comparison of vaccination numbers, and the concentration of Covid-19 virus in wastewater samples. 

Our webpage is meant to have 4 pages: a home page with general information, an interactive map showing total vaccines administered by state, a bar graph of vaccinations by state, and a bar graph of vaccines administered by age.

Resources:

Data that showed percentiles of shed virus in wastewater samples: 
https://covid.cdc.gov/covid-data-tracker/#wastewater-surveillance

Data that showed vaccines administered in the US: 
https://data.cdc.gov/Vaccinations/COVID-19-Vaccinations-in-the-United-States-Jurisdi/unsk-b7fc

Files: 
Static folder 
    * Charts.js: code that creates multiple bar chars using the vaccinations data 

app.py : code that creates routes to our webpages and calls upon the sqlite database
covid19.ipynb: jupyter notebook that hosts sqlite database for the vaccinations data
seward.ipynb: jupyter notebook that hosts sqlite database for the wastewater data 

