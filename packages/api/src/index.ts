import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import UserRoutes from './routes/user.routes';
import PostRoutes from './routes/post.routes';
import { DynamoMapper } from './config/dynamo';
import { User } from './schema/User.schema';
import { Post } from './schema/Post.schema';
import app from './app'

app.listen(4000, async () => {
  console.log('app started');
  const capacity = {
    readCapacityUnits: 5,
    writeCapacityUnits: 5,
  }
  await DynamoMapper.ensureTableExists(User, capacity);
  await DynamoMapper.ensureTableExists(Post, capacity);
});
