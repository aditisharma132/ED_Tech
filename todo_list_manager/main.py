import sys
from task_manager import TaskManager
from datetime import datetime

def is_valid_date(date_str):
    try:
        datetime.strptime(date_str, "%Y-%m-%d")
        return True
    except ValueError:
        return False

def main():
    manager = TaskManager()

    while True:
        print("\nOptions: add, complete, delete, view, undo, redo, exit")
        command = input("Enter command: ")

        if command == "add":
            description = input("Enter description: ")
            due_date = input("Enter due date (YYYY-MM-DD) or leave blank: ")
            if due_date and not is_valid_date(due_date):
                print("Invalid date format. Please use YYYY-MM-DD.")
                continue
            tags = input("Enter tags (comma separated) or leave blank: ").split(',')
            tags = [tag.strip() for tag in tags] if tags[0] else None
            manager.add_task(description, due_date, tags)

        elif command == "complete":
            try:
                task_id = int(input("Enter ID of task to complete: "))
                manager.mark_task_completed(task_id)
            except ValueError:
                print("Invalid ID")

        elif command == "delete":
            try:
                task_id = int(input("Enter ID of task to delete: "))
                manager.delete_task(task_id)
            except ValueError:
                print("Invalid ID")

        elif command == "view":
            filter_by = input("View options: all, completed, pending: ")
            manager.view_tasks(filter_by if filter_by in ["completed", "pending"] else None)

        elif command == "undo":
            try:
                manager.undo()
            except Exception as e:
                print(e)

        elif command == "redo":
            try:
                manager.redo()
            except Exception as e:
                print(e)

        elif command == "exit":
            sys.exit(0)

        else:
            print("Invalid command")

if __name__ == "__main__":
    main()
