import { 
  users, type User, type InsertUser, 
  subjects, type Subject, type InsertSubject,
  resources, type Resource, type InsertResource,
  lastMinuteTips, type LastMinuteTip, type InsertLastMinuteTip,
  hardQuestions, type HardQuestion, type InsertHardQuestion 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { pool } from "./db";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subject methods
  getSubject(id: number): Promise<Subject | undefined>;
  getAllSubjects(): Promise<Subject[]>;
  createSubject(subject: InsertSubject): Promise<Subject>;
  
  // Resource methods
  getResource(id: number): Promise<Resource | undefined>;
  getAllResources(): Promise<Resource[]>;
  getResourcesBySubject(subjectId: number): Promise<Resource[]>;
  createResource(resource: InsertResource): Promise<Resource>;
  
  // Last minute tip methods
  getLastMinuteTip(id: number): Promise<LastMinuteTip | undefined>;
  getAllLastMinuteTips(): Promise<LastMinuteTip[]>;
  getLastMinuteTipsBySubject(subjectId: number): Promise<LastMinuteTip[]>;
  createLastMinuteTip(tip: InsertLastMinuteTip): Promise<LastMinuteTip>;
  
  // Hard question methods
  getHardQuestion(id: number): Promise<HardQuestion | undefined>;
  getAllHardQuestions(): Promise<HardQuestion[]>;
  getHardQuestionsBySubject(subjectId: number): Promise<HardQuestion[]>;
  createHardQuestion(question: InsertHardQuestion): Promise<HardQuestion>;
}

// Memory storage (for development only)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subjectsMap: Map<number, Subject>;
  private resourcesMap: Map<number, Resource>;
  private lastMinuteTipsMap: Map<number, LastMinuteTip>;
  private hardQuestionsMap: Map<number, HardQuestion>;
  private currentId: { [key: string]: number };

  constructor() {
    
    this.users = new Map();
    this.subjectsMap = new Map();
    this.resourcesMap = new Map();
    this.lastMinuteTipsMap = new Map();
    this.hardQuestionsMap = new Map();
    
    this.currentId = {
      users: 1,
      subjects: 1,
      resources: 1,
      lastMinuteTips: 1,
      hardQuestions: 1
    };
    
    // Seed with some initial data
    this.seedData();
  }

  private seedData() {
    // Seed subjects
    const subjectData: InsertSubject[] = [
      { name: "Chemistry", icon: "flask-conical", color: "blue" },
      { name: "Biology", icon: "flask", color: "green" },
      { name: "Physics", icon: "zap", color: "yellow" },
      { name: "Additional Mathematics", icon: "calculator", color: "pink" },
      { name: "Extended Mathematics", icon: "plus-square", color: "purple" },
      { name: "French", icon: "languages", color: "orange" },
      { name: "Economics", icon: "trending-up", color: "blue" },
      { name: "English Language", icon: "book-open", color: "green" },
      { name: "Computer Science", icon: "laptop-code", color: "yellow" }
    ];
    
    subjectData.forEach(subject => {
      this.createSubject(subject);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subject methods
  async getSubject(id: number): Promise<Subject | undefined> {
    return this.subjectsMap.get(id);
  }
  
  async getAllSubjects(): Promise<Subject[]> {
    return Array.from(this.subjectsMap.values());
  }
  
  async createSubject(insertSubject: InsertSubject): Promise<Subject> {
    const id = this.currentId.subjects++;
    const subject: Subject = { ...insertSubject, id };
    this.subjectsMap.set(id, subject);
    return subject;
  }
  
  // Resource methods
  async getResource(id: number): Promise<Resource | undefined> {
    return this.resourcesMap.get(id);
  }
  
  async getAllResources(): Promise<Resource[]> {
    return Array.from(this.resourcesMap.values());
  }
  
  async getResourcesBySubject(subjectId: number): Promise<Resource[]> {
    return Array.from(this.resourcesMap.values()).filter(
      (resource) => resource.subjectId === subjectId
    );
  }
  
  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = this.currentId.resources++;
    const resource: Resource = { 
      ...insertResource, 
      id,
      description: insertResource.description || null 
    };
    this.resourcesMap.set(id, resource);
    return resource;
  }
  
  // Last minute tip methods
  async getLastMinuteTip(id: number): Promise<LastMinuteTip | undefined> {
    return this.lastMinuteTipsMap.get(id);
  }
  
  async getAllLastMinuteTips(): Promise<LastMinuteTip[]> {
    return Array.from(this.lastMinuteTipsMap.values());
  }
  
  async getLastMinuteTipsBySubject(subjectId: number): Promise<LastMinuteTip[]> {
    return Array.from(this.lastMinuteTipsMap.values()).filter(
      (tip) => tip.subjectId === subjectId
    );
  }
  
  async createLastMinuteTip(insertLastMinuteTip: InsertLastMinuteTip): Promise<LastMinuteTip> {
    const id = this.currentId.lastMinuteTips++;
    const lastMinuteTip: LastMinuteTip = { ...insertLastMinuteTip, id };
    this.lastMinuteTipsMap.set(id, lastMinuteTip);
    return lastMinuteTip;
  }
  
  // Hard question methods
  async getHardQuestion(id: number): Promise<HardQuestion | undefined> {
    return this.hardQuestionsMap.get(id);
  }
  
  async getAllHardQuestions(): Promise<HardQuestion[]> {
    return Array.from(this.hardQuestionsMap.values());
  }
  
  async getHardQuestionsBySubject(subjectId: number): Promise<HardQuestion[]> {
    return Array.from(this.hardQuestionsMap.values()).filter(
      (question) => question.subjectId === subjectId
    );
  }
  
  async createHardQuestion(insertHardQuestion: InsertHardQuestion): Promise<HardQuestion> {
    const id = this.currentId.hardQuestions++;
    const hardQuestion: HardQuestion = { 
      ...insertHardQuestion, 
      id,
      solution: insertHardQuestion.solution || null 
    };
    this.hardQuestionsMap.set(id, hardQuestion);
    return hardQuestion;
  }
}

// Database storage implementation using PostgreSQL
export class DatabaseStorage implements IStorage {
  constructor() {
    // Seed initial data if needed
    this.seedDataIfNeeded();
  }

  private async seedDataIfNeeded() {
    // Check if subjects already exist
    const existingSubjects = await db.select().from(subjects);
    
    if (existingSubjects.length === 0) {
      // Seed subjects
      const subjectsData = [
        { name: "Chemistry", icon: "flask-conical", color: "blue" },
        { name: "Biology", icon: "flask", color: "green" },
        { name: "Physics", icon: "zap", color: "yellow" },
        { name: "Additional Mathematics", icon: "calculator", color: "pink" },
        { name: "Extended Mathematics", icon: "plus-square", color: "purple" },
        { name: "French", icon: "languages", color: "orange" },
        { name: "Economics", icon: "trending-up", color: "blue" },
        { name: "English Language", icon: "book-open", color: "green" },
        { name: "Computer Science", icon: "laptop-code", color: "yellow" }
      ];
      
      for (const subject of subjectsData) {
        await db.insert(subjects).values(subject);
      }
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getSubject(id: number): Promise<Subject | undefined> {
    const result = await db.select().from(subjects).where(eq(subjects.id, id));
    return result[0];
  }

  async getAllSubjects(): Promise<Subject[]> {
    return await db.select().from(subjects);
  }

  async createSubject(insertSubject: InsertSubject): Promise<Subject> {
    const result = await db.insert(subjects).values(insertSubject).returning();
    return result[0];
  }

  async getResource(id: number): Promise<Resource | undefined> {
    const result = await db.select().from(resources).where(eq(resources.id, id));
    return result[0];
  }

  async getAllResources(): Promise<Resource[]> {
    return await db.select().from(resources);
  }

  async getResourcesBySubject(subjectId: number): Promise<Resource[]> {
    return await db.select().from(resources).where(eq(resources.subjectId, subjectId));
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    // Make sure description is not undefined
    const resourceToInsert = {
      ...insertResource,
      description: insertResource.description || null
    };
    
    const result = await db.insert(resources).values(resourceToInsert).returning();
    return result[0];
  }

  async getLastMinuteTip(id: number): Promise<LastMinuteTip | undefined> {
    const result = await db.select().from(lastMinuteTips).where(eq(lastMinuteTips.id, id));
    return result[0];
  }

  async getAllLastMinuteTips(): Promise<LastMinuteTip[]> {
    return await db.select().from(lastMinuteTips);
  }

  async getLastMinuteTipsBySubject(subjectId: number): Promise<LastMinuteTip[]> {
    return await db.select().from(lastMinuteTips).where(eq(lastMinuteTips.subjectId, subjectId));
  }

  async createLastMinuteTip(insertLastMinuteTip: InsertLastMinuteTip): Promise<LastMinuteTip> {
    const result = await db.insert(lastMinuteTips).values(insertLastMinuteTip).returning();
    return result[0];
  }

  async getHardQuestion(id: number): Promise<HardQuestion | undefined> {
    const result = await db.select().from(hardQuestions).where(eq(hardQuestions.id, id));
    return result[0];
  }

  async getAllHardQuestions(): Promise<HardQuestion[]> {
    return await db.select().from(hardQuestions);
  }

  async getHardQuestionsBySubject(subjectId: number): Promise<HardQuestion[]> {
    return await db.select().from(hardQuestions).where(eq(hardQuestions.subjectId, subjectId));
  }

  async createHardQuestion(insertHardQuestion: InsertHardQuestion): Promise<HardQuestion> {
    // Make sure solution is not undefined
    const questionToInsert = {
      ...insertHardQuestion,
      solution: insertHardQuestion.solution || null
    };
    
    const result = await db.insert(hardQuestions).values(questionToInsert).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
