import React, { useState } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar, CheckCircle2, Circle, SquarePen, Trash2 } from "lucide-react";
import { Input } from "./ui/input";
import api from "@/lib/axios";
import { toast } from "sonner";

const TaskCard = ({ task, index, handleTaskChanged }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [updateTaskTitle, setUpdateTaskTitle] = useState(task.title || "");

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      toast.success("Nhiệm vụ đã xoá.");
      handleTaskChanged();
    } catch (error) {
      console.error("Lỗi xảy ra khi xoá task.", error);
      toast.error("Lỗi xảy ra khi xoá nhiệm vụ mới.");
    }
  };

  const updateTask = async () => {
    try {
      setIsEditting(false);
      await api.put(`/tasks/${task._id}`, {
        title: updateTaskTitle,
      });
      toast.success(`Nhiệm vụ đã đổi thành ${updateTaskTitle}`);
      handleTaskChanged();
    } catch (error) {
      console.error("Lỗi xảy ra khi update task.", error);
      toast.error("Lỗi xảy ra khi cập nhập nhiệm vụ.");
    }
  };

  const toggleTaskCompleteButton = async () => {
    try {
      if (task.status === "active") {
        await api.put(`/tasks/${task._id}`, {
          status: "complete",
          completedAt: new Date().toISOString(),
        });

        toast.success(`${task.title} đã hoàn thành.`);
      } else {
        await api.put(`/tasks/${task._id}`, {
          status: "active",
          completedAt: null,
        });
        toast.success(`${task.title} đã đổi sang chưa hoàn thành.`);
      }

      handleTaskChanged();
    } catch (error) {
      console.error("Lỗi xảy ra khi update task.", error);
      toast.error("Lỗi xảy ra khi cập nhập nhiệm vụ.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      updateTask();
    }
  };

  return (
    <Card
      className={cn(
        "p-4 transition-all duration-200 animate-fade-in group",
        task.status === "complete" && "opacity-80 bg-green-50"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex-shrink-0 size-10 rounded-full transition-all duration-200",
            task.status === "complete"
              ? "text-green-600 hover:text-green-700 bg-green-100"
              : "text-gray-500 hover:text-red-500 hover:bg-red-50"
          )}
          onClick={toggleTaskCompleteButton}
        >
          {task.status === "complete" ? (
            <CheckCircle2 className="size-6" />
          ) : (
            <Circle className="size-6" />
          )}
        </Button>

        <div className="flex-1 min-w-0">
          {isEditting ? (
            <Input
              placeholder="Nhiệm vụ mới là gì? 🍄"
              className="flex-1 h-12 text-base"
              type="text"
              value={updateTaskTitle}
              onChange={(e) => setUpdateTaskTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={() => {
                setIsEditting(false);
                setUpdateTaskTitle(task.title || "");
              }}
            />
          ) : (
            <p
              className={cn(
                "text-base font-semibold transition-all duration-200",
                task.status === "complete"
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              )}
            >
              {task.title}
            </p>
          )}

          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-orange-500" />
            <span className="text-xs text-gray-500 font-medium">
              {new Date(task.createdAt).toLocaleString()}
            </span>
            {task.completedAt && (
              <>
                <span className="text-xs text-gray-400"> → </span>
                <span className="text-xs text-green-600 font-medium">
                  ⭐ {new Date(task.completedAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          <Button
            variant="secondary"
            size="icon"
            className="flex-shrink-0 size-9"
            onClick={() => {
              setIsEditting(true);
              setUpdateTaskTitle(task.title || "");
            }}
          >
            <SquarePen className="size-4" />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            className="flex-shrink-0 size-9"
            onClick={() => deleteTask(task._id)}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
