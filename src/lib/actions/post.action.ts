'use server';

import { revalidatePath } from 'next/cache';

import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';
import { handleError } from '../utils';
