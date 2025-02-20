package com.example.library_backend.controller;


import com.example.library_backend.exception.RecordNotFoundException;
import com.example.library_backend.model.Book;
import com.example.library_backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class BookController {

    @Autowired
    private BookRepository bookRepository;



    @PostMapping("/addbook")
    public Book addBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Book> getById(@PathVariable int id){
         Book book = bookRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record Not found"));

         return ResponseEntity.ok(book);
    }


    @PutMapping("/editBook/{id}")
    public ResponseEntity<Book> editDetails(@PathVariable int id, @RequestBody Book editBookDetails){
         Book editDetails = bookRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("No Such Record Found"));

        editDetails.setName(editBookDetails.getName());
        editDetails.setAuthor(editDetails.getAuthor());
        editDetails.setDescription(editBookDetails.getDescription());
        editDetails.setCategory(editBookDetails.getCategory());

        bookRepository.save(editDetails);

        return ResponseEntity.ok(editDetails);

    }

    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable int id){
        Book book = bookRepository.findById(id).orElseThrow(()-> new RecordNotFoundException("Record Not found"));

        bookRepository.delete(book);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
