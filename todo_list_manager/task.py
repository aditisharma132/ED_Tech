from datetime import datetime

class Task:
    _id_counter = 1

    def __init__(self, description, due_date=None, tags=None):
        self.id = Task._id_counter
        Task._id_counter += 1
        self.description = description
        self.due_date = due_date
        self.tags = tags if tags else []
        self.completed = False

    def mark_completed(self):
        self.completed = True

    def __str__(self):
        status = "Completed" if self.completed else "Pending"
        due_date_str = f", Due: {self.due_date}" if self.due_date else ""
        tags_str = f", Tags: {', '.join(self.tags)}" if self.tags else ""
        return f"ID: {self.id}, {self.description} - {status}{due_date_str}{tags_str}"

class TaskBuilder:
    def __init__(self):
        self._description = None
        self._due_date = None
        self._tags = []

    def set_description(self, description):
        self._description = description
        return self

    def set_due_date(self, due_date):
        self._due_date = due_date
        return self

    def set_tags(self, tags):
        self._tags = tags
        return self

    def build(self):
        return Task(self._description, self._due_date, self._tags)
