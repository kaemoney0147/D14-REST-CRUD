const getData = async () => {
    const product = {
      name: 'Iphone x ',
      description: 'This was my best iphone used',
      brand: 'Apple', 
      imageUrl:
        'https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80',
      price: 60,
    }
  
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/product/',
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjgwODM0MjMsImV4cCI6MTY2OTI5MzAyM30.Q91c_7Uzf8wt0zNONFw6-2P0p3bt6jmWXenodNwkVLQ',
        },
      },
    )
  
    const products = await response.json()
  
    console.log(products)
  }
  getData()