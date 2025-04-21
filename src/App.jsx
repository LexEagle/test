import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Blog() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (connect this to a real backend later)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">My Modern Blog</h1>
        <p className="text-lg text-gray-500">Exploring life, tech, and thoughts.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-xl">Placeholder Article Title</h3>
              <p className="text-sm text-gray-600">#tag1 #tag2</p>
              <p className="mt-2 text-gray-700">This is a short excerpt of the article to give a preview...</p>
              <Button className="mt-3">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hello! I’m a passionate writer who enjoys sharing thoughts on tech, life, and everything in between. This blog is my outlet.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="text-center space-x-4 mt-10">
        <a href="#"><Mail className="inline" /></a>
        <a href="#"><Twitter className="inline" /></a>
        <a href="#"><Facebook className="inline" /></a>
        <a href="#"><Instagram className="inline" /></a>
        <a href="#"><Github className="inline" /></a>
        <p className="text-sm text-gray-500 mt-2">© 2025 Your Blog Name</p>
      </footer>
    </div>
  );
}
