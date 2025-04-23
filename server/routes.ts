import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  // Using app directly instead of app.router which is deprecated

  // Subjects endpoints
  app.get("/api/subjects", async (req: Request, res: Response) => {
    try {
      const subjects = await storage.getAllSubjects();
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subjects" });
    }
  });

  app.get("/api/subjects/:id", async (req: Request, res: Response) => {
    try {
      const subject = await storage.getSubject(parseInt(req.params.id));
      if (!subject) {
        return res.status(404).json({ error: "Subject not found" });
      }
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subject" });
    }
  });

  // Resources endpoints
  app.get("/api/resources", async (req: Request, res: Response) => {
    try {
      const resources = await storage.getAllResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch resources" });
    }
  });

  app.get("/api/resources/by-subject/:subjectId", async (req: Request, res: Response) => {
    try {
      const resources = await storage.getResourcesBySubject(parseInt(req.params.subjectId));
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch resources by subject" });
    }
  });

  // Last minute tips endpoints
  app.get("/api/last-minute-tips", async (req: Request, res: Response) => {
    try {
      const tips = await storage.getAllLastMinuteTips();
      res.json(tips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch last minute tips" });
    }
  });

  app.get("/api/last-minute-tips/by-subject/:subjectId", async (req: Request, res: Response) => {
    try {
      const tips = await storage.getLastMinuteTipsBySubject(parseInt(req.params.subjectId));
      res.json(tips);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch last minute tips by subject" });
    }
  });

  // Hard questions endpoints
  app.get("/api/hard-questions", async (req: Request, res: Response) => {
    try {
      const questions = await storage.getAllHardQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch hard questions" });
    }
  });

  app.get("/api/hard-questions/by-subject/:subjectId", async (req: Request, res: Response) => {
    try {
      const questions = await storage.getHardQuestionsBySubject(parseInt(req.params.subjectId));
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch hard questions by subject" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
