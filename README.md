# Dog Tinder 🐕

[Click here to view frontend repo](https://github.com/weilonglin/portfolio-project-frontend)

<img width="500px" src="https://github.com/weilonglin/portfolio-project-frontend/blob/development/homepage.png"/>

### Tech

**Backend**

- Apollo-graphql
- Express
- PostgreSQL
- Sequelize

## DB relations

Users hasMany dogs

Dogs belongsTo Users

Dogs belongsToMany tags

Tags belongsToMany dogs

chatMessages belongsTo users

chatMessages belongsTo recipient

Dogs hasMany joinedTableLikes

JoinedTableLikes belongsTo users

Dogs hasMany joinedTabledislikes

joinedTabledislikes belongsTo users

## Links

### Wireframe

Go to [Wireframe](https://wireframepro.mockflow.com/view/M63e650c9df5cc289f34b4b6c30ed1df61598867540247#/page/0766497b5bf94ed2827e6cd60fa0ea31)

### Project board

Go to [project board](https://github.com/weilonglin/portfolio-project-frontend/projects/1)

### Database model

Go to [database model](https://dbdiagram.io/d/5f4e166088d052352cb589ce)
