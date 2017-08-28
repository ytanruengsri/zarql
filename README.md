# zarql

graphql playground using zalando public api for getting articles

## Installation
Just run
```
$ yarn
```

## Development
Just run
```
$ npm run dev
```

and enjoy ```localhost:4000/graphql```

## Try it out!
```
http://localhost:4000/graphql
```

**Query:**
```
{
  article(articleId:"V1021N03I-Q11") {
    id
    modelId
    name
    shopUrl
  }
  brand(brandId:"V10") {
    name
  }
  reviews(articleId:"V1021N03I-Q11") {
    title
    created
    rating
  }
  reviewSummaries(modelId:"V1021N03I") {
		articleModelId
    averageStarRating
    numberOfUserReviews
    numberOfUserRecommendations
    numberOfUserPositiveRecommendations
  }
}
```

### Query article
![alt tag](https://raw.githubusercontent.com/ytanruengsri/zarql/master/docs/images/article_query.png)

### Query recommendation
![alt tag](https://raw.githubusercontent.com/ytanruengsri/zarql/master/docs/images/recommendation_query.png)
