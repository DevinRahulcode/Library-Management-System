package com.example.library_backend.controller;

import com.example.library_backend.model.Member;
import com.example.library_backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/add")
    public Member addmember(@RequestBody Member member){
        return memberRepository.save(member);
    }

    @GetMapping("/getall")
    public List<Member> getallMembers(){
        return memberRepository.findAll();
    }

    @GetMapping
    public ResponseEntity<Member> getmeberById(@PathVariable int id){
        Member member = memberRepository.findById(id).orElseThrow(null);
        return ResponseEntity.ok(member);
    }

}
