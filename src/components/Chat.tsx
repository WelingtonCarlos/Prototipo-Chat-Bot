"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[560px]">
      <CardHeader>
        <CardTitle>Chat Bot</CardTitle>
        <CardDescription>Protótipo de Chat Bot baseado no Open AI do Versel SDK</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {message.role == "user" && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/WelingtonCarlos.png" />
                  </Avatar>
                )}
                {message.role == "assistant" && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/Github.png" />
                  </Avatar>
                )}

                <p className="text-slate-600 font-medium">
                  <span className="block font-semibold text-slate-700">
                    {message.role == "user" ? "Usuário" : "CHAT AI"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Faça sua pergunta"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
