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

  app.post("/api/resources", async (req: Request, res: Response) => {
    try {
      const { subjectId, title, type, url, description } = req.body;
      const resource = await storage.createResource({
        subjectId,
        title,
        type,
        url,
        description
      });
      res.status(201).json(resource);
    } catch (error) {
      res.status(500).json({ error: "Failed to create resource" });
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

  app.post("/api/last-minute-tips", async (req: Request, res: Response) => {
    try {
      const { subjectId, title, content, type } = req.body;
      const tip = await storage.createLastMinuteTip({
        subjectId,
        title,
        content,
        type
      });
      res.status(201).json(tip);
    } catch (error) {
      res.status(500).json({ error: "Failed to create last minute tip" });
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

  app.post("/api/hard-questions", async (req: Request, res: Response) => {
    try {
      const { subjectId, title, question, solution, difficulty } = req.body;
      const hardQuestion = await storage.createHardQuestion({
        subjectId,
        title,
        question,
        solution,
        difficulty
      });
      res.status(201).json(hardQuestion);
    } catch (error) {
      res.status(500).json({ error: "Failed to create hard question" });
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
