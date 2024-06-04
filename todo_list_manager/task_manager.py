from task import TaskBuilder
from memento import Memento, Caretaker
from logger import logger

class TaskManager:
    def __init__(self):
        self.tasks = []
        self.caretaker = Caretaker()

    def add_task(self, description, due_date=None, tags=None):
        try:
            task = TaskBuilder().set_description(description).set_due_date(due_date).set_tags(tags).build()
            self.tasks.append(task)
            self.caretaker.save(self.tasks.copy())
            logger.info(f"Task added: {task}")
        except Exception as e:
            logger.error(f"Failed to add task: {e}")

    def mark_task_completed(self, task_id):
        try:
            for task in self.tasks:
                if task.id == task_id:
                    task.mark_completed()
                    self.caretaker.save(self.tasks.copy())
                    logger.info(f"Task marked as completed: {task}")
                    return
            logger.warning(f"Task not found: {task_id}")
        except Exception as e:
            logger.error(f"Failed to mark task as completed: {e}")

    def delete_task(self, task_id):
        try:
            self.tasks = [task for task in self.tasks if task.id != task_id]
            self.caretaker.save(self.tasks.copy())
            logger.info(f"Task deleted: {task_id}")
        except Exception as e:
            logger.error(f"Failed to delete task: {e}")

    def view_tasks(self, filter_by=None):
        try:
            if filter_by == "completed":
                tasks = [task for task in self.tasks if task.completed]
            elif filter_by == "pending":
                tasks = [task for task in self.tasks if not task.completed]
            else:
                tasks = self.tasks
            for task in tasks:
                print(task)
        except Exception as e:
            logger.error(f"Failed to view tasks: {e}")

    def undo(self):
        try:
            self.tasks = self.caretaker.undo()
            logger.info("Undo successful")
        except Exception as e:
            logger.error(f"Failed to undo: {e}")

    def redo(self):
        try:
            self.tasks = self.caretaker.redo()
            logger.info("Redo successful")
        except Exception as e:
            logger.error(f"Failed to redo: {e}")
