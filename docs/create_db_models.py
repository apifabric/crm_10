# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Customer(Base):
    """description: Represents a customer in the CRM system."""
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)
    date_joined = Column(DateTime, default=datetime.datetime.utcnow)

class Address(Base):
    """description: Stores postal addresses for customers."""
    __tablename__ = 'addresses'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    street = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String)
    zip_code = Column(String)

class Order(Base):
    """description: Represents an order made by a customer."""
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    order_date = Column(DateTime, default=datetime.datetime.utcnow)
    total_amount = Column(Float, default=0.0)

class Product(Base):
    """description: Stores product information available for sale."""
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float, nullable=False)

class OrderItem(Base):
    """description: Links products to orders and records specifics of each item in an order."""
    __tablename__ = 'order_items'

    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    amount = Column(Float)

class Payment(Base):
    """description: Records payments made by customers against their orders."""
    __tablename__ = 'payments'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    amount_paid = Column(Float, nullable=False, default=0.0)
    payment_date = Column(DateTime, default=datetime.datetime.utcnow)

class Supplier(Base):
    """description: Stores details of suppliers who provide products."""
    __tablename__ = 'suppliers'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_name = Column(String)
    phone = Column(String)

class ProductSupplier(Base):
    """description: Joins products to suppliers, indicating which supplier provides which product."""
    __tablename__ = 'product_suppliers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)

class Category(Base):
    """description: Represents categories to organize products."""
    __tablename__ = 'categories'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)

class ProductCategory(Base):
    """description: Intersection table to associate products with categories."""
    __tablename__ = 'product_categories'

    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    category_id = Column(Integer, ForeignKey('categories.id'), nullable=False)

class Employee(Base):
    """description: Represents employees in the CRM system for assigning tasks and order processing."""
    __tablename__ = 'employees'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String)

class CustomerSupportTicket(Base):
    """description: Records customer support tickets for complaints or assistance requests."""
    __tablename__ = 'customer_support_tickets'

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    issue_description = Column(String, nullable=False)
    date_created = Column(DateTime, default=datetime.datetime.utcnow)
    resolved = Column(Integer, default=0)

# Create an engine and session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
customers = [
    Customer(name="Alice Smith", email="alice@example.com", phone="123-456-7890"),
    Customer(name="Bob Johnson", email="bob@example.com", phone="234-567-8901"),
    Customer(name="Charlie Brown", email="charlie@example.com", phone="345-678-9012"),
]

addresses = [
    Address(customer_id=1, street="123 Main St", city="Anytown", state="AN", zip_code="12345"),
    Address(customer_id=2, street="456 Elm St", city="Othertown", state="OT", zip_code="67890"),
]

orders = [
    Order(customer_id=1, total_amount=150.0),
    Order(customer_id=2, total_amount=200.0),
]

products = [
    Product(name="Laptop", description="14-inch laptop", price=799.99),
    Product(name="Headphones", description="Noise-cancelling headphones", price=199.99),
]

order_items = [
    OrderItem(order_id=1, product_id=1, quantity=1, amount=799.99),
    OrderItem(order_id=1, product_id=2, quantity=2, amount=399.98),
]

payments = [
    Payment(order_id=1, amount_paid=100.0),
    Payment(order_id=2, amount_paid=150.0),
]

suppliers = [
    Supplier(name="Tech Suppliers Inc.", contact_name="John Doe", phone="456-123-7890"),
]

product_suppliers = [
    ProductSupplier(product_id=1, supplier_id=1),
]

categories = [
    Category(name="Electronics", description="Electronic devices and gadgets"),
]

product_categories = [
    ProductCategory(product_id=1, category_id=1),
]

employees = [
    Employee(first_name="Emily", last_name="Stone", email="emily.stone@example.com"),
]

customer_support_tickets = [
    CustomerSupportTicket(customer_id=1, issue_description="Laptop not working"),
]

# Committing the data to the database
session.add_all(customers + addresses + orders + products + order_items + payments +
                suppliers + product_suppliers + categories + product_categories +
                employees + customer_support_tickets)
session.commit()
