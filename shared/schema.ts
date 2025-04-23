import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (from the original template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Study resources schemas
export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const insertSubjectSchema = createInsertSchema(subjects).pick({
  name: true,
  icon: true,
  color: true,
});

export type InsertSubject = z.infer<typeof insertSubjectSchema>;
export type Subject = typeof subjects.$inferSelect;

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").notNull(),
  title: text("title").notNull(),
  type: text("type").notNull(), // "pdf", "link", "video", etc.
  url: text("url").notNull(),
  description: text("description"),
});

export const insertResourceSchema = createInsertSchema(resources).pick({
  subjectId: true,
  title: true,
  type: true,
  url: true,
  description: true,
});

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

export const lastMinuteTips = pgTable("last_minute_tips", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").notNull(),
  content: text("content").notNull(),
});

export const insertLastMinuteTipSchema = createInsertSchema(lastMinuteTips).pick({
  subjectId: true,
  content: true,
});

export type InsertLastMinuteTip = z.infer<typeof insertLastMinuteTipSchema>;
export type LastMinuteTip = typeof lastMinuteTips.$inferSelect;

export const hardQuestions = pgTable("hard_questions", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").notNull(),
  title: text("title").notNull(),
  question: text("question").notNull(),
  solution: text("solution"),
  difficulty: integer("difficulty").notNull(), // 1-5 scale
});

export const insertHardQuestionSchema = createInsertSchema(hardQuestions).pick({
  subjectId: true,
  title: true,
  question: true,
  solution: true,
  difficulty: true,
});

export type InsertHardQuestion = z.infer<typeof insertHardQuestionSchema>;
export type HardQuestion = typeof hardQuestions.$inferSelect;
