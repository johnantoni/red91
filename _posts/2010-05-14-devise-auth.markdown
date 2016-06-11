---
layout: post
title: Devise Auth
category: ruby
---

[Devise](http://github.com/plataformatec/devise) is definitely my rails authentication of choice, really simple to implement. sample user model below:

    class User < ActiveRecord::Base
      # Include default devise modules. Others available are:  
      # :token_authenticatable, :lockable, :timeoutable and :activatable  
      # :confirmable  
      devise :database_authenticatable, :registerable,   
           :recoverable, :rememberable, :trackable, :validatable  
      
      # Setup accessible (or protected) attributes for your model  
      attr_accessible :email, :password, :password_confirmation
    end

little tip, to disable signup just comment out *:registerable* that will remove all routes relating to signup and effectively cut out access to that area. 
